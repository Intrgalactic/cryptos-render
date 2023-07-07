import Header from "layouts/header";
import { SwapWidget } from "@uniswap/widgets";
import "@uniswap/widgets/fonts.css";
import { CtaBtn } from "components/cta-btn";
import { ethers } from "ethers";
import ExchangeNav from "layouts/exchange-nav";
import { SwapWidgets } from "layouts/swap-widgets";
import Loader from "layouts/loader";
import useLoader from "hooks/useLoader";
import { useEffect, useState, useReducer, useRef } from "react";
import { setSessionStorageItem, convertNetworkName } from "utils/utilities";
import useSessionStorage from "hooks/useSessionStorage";
import { SwapWidgetBox } from "components/swap-widget-box";
import { LockedBox } from "components/locked-box";
import { ErrorPopup } from "components/error-popup";
import { BlockchainUserRecord } from "components/blockchain-record";
import { SectionHeading } from "components/section-heading";
import { setup1inchWidget } from "@1inch/embedded-widget";
import Footer from "layouts/footer";
import { MoveArrows } from "components/move-arrows";
import useLocalStorage from "hooks/useSessionStorage";

export default function Exchange({ isLoading, setIsLoading }) {
    const initialErrState = {
        errorReason: '',
        errorDescription: '',
        isError: false
    }

    const [provider, setProvider] = useState();
    const [accounts, setAccounts] = useState(useSessionStorage("eth_accounts"));
    const [signer, setSigner] = useState();
    const [network, setNetwork] = useState({
        networkName: '',
        chainId: 1,
    })
    const [isProviderMissing, setIsProviderMissing] = useState();
    const [error, dispatch] = useReducer(errorReducer, initialErrState);
    const oneInchSwapWidgetRef = useRef();
    const swapWidgetsRef = useRef();
    useEffect(() => {
        try {
            new Promise(async (resolve, reject) => {
                if (window.ethereum) {
                    const web3Provider = new ethers.providers.Web3Provider(window.ethereum)
                    if (!provider) {
                        setProvider(web3Provider);
                        getNetwork();
                    }
                    if (accounts !== null) {
                        await getBalance(accounts.accounts);
                    }
                    if (oneInchSwapWidgetRef.current) {
                        setup1inchWidget({
                            chainId: 1,
                            sourceTokenSymbol: "ETH",
                            destinationTokenSymbol: "USDT",
                            hostElement: oneInchSwapWidgetRef.current,
                            provider: window.ethereum,
                            theme: "light",
                            sourceTokenAmount: "1"
                        });
                    }
                    setSigner(web3Provider.getSigner());
                    window.ethereum.on("accountsChanged", refreshAccounts);
                    window.ethereum.on("chainChanged", getNetwork);
                }
                else {
                    setIsProviderMissing(true);
                    dispatch({ type: "missing provider" });
                }

                setTimeout(() => {
                    resolve(true);
                }, 1000);
                return () => {
                    window.ethereum.removeListener("chainChanged", getNetwork);
                    window.ethereum.removeListener("accountsChanged", refreshAccounts);
                }
            }).then(() => {
                setIsLoading(false);
            });
        }
        catch (err) {
            setIsProviderMissing(true);
            dispatch({ type: err.reason });
        }

    }, [provider]);
    async function getNetwork() {
        try {
            const networkProvider = new ethers.providers.Web3Provider(window.ethereum);
            const network = await networkProvider.getNetwork();
            if (network.name !== "homestead") {
                dispatch({ type: "wrong network" });
            }
            else if (network.name === "homestead") {
                dispatch({ type: "no error" });
            }
            setNetwork({
                networkName: convertNetworkName(network.name),
                chainId: network.chainId
            })
        }
        catch (err) {
            dispatch({ type: err.code });
        }
    }
    async function connectWallet() {
        try {
            const accounts = await provider.send("eth_requestAccounts", []);
            refreshAccounts(accounts);
        }
        catch (err) {
            dispatch({ type: err.code });
        }
    }
    function refreshAccounts(accounts) {
        try {
            if (accounts.length > 0) {
                setSessionStorageItem('set', "eth_accounts", JSON.stringify({ accounts }));
                setAccounts({
                    accounts: accounts
                });
                dispatch({ type: "no error" });
                getBalance(accounts);
            }
            else {
                console.log(55);
                setSessionStorageItem('delete', "eth_accounts");
                setAccounts(null);
            }
        }
        catch (err) {
            dispatch({ type: err.code });
        }
    }
    async function getBalance(accounts) {
        try {
            var balance = await provider.getBalance(accounts[0]);
            balance = ethers.utils.formatEther(balance);
            balance = parseFloat(balance).toFixed(4);
            setAccounts({
                ...accounts,
                balance: balance
            })
        }
        catch (err) {
            dispatch({ type: err.code });
        }
    }
    function errorReducer(state, action) {
        switch (action.type) {
            case 'missing provider':
                return { errorReason: "The provider is missing", errorDescription: "Please download wallet extension (e.g metamask or walletConnect)", isError: true }
            case "wrong network":
                return { errorReason: "The network is not main ERC-20", errorDescription: "Please change your network to mainnet", isError: true }
            case -32002:
                return { errorReason: "The request is already pending", errorDescription: "Please accept connection in your wallet", isError: true }
            case "no error":
                return initialErrState
            case 4001:
                return initialErrState
            default:
                return { errorReason: "Something went wrong", errorDescription: "Please try again", isError: true }
        }
    }
    return (
        <>
            <Header />

            <div className="exchange-app">
                <SectionHeading heading={["swap your cryptocurrency within seconds"]} />
                {!isProviderMissing && !error.isError &&
                    <>
                        <ExchangeNav>
                            {accounts !== null &&
                                <>
                                    <BlockchainUserRecord type="Selected Network" data={network.networkName} />
                                    <BlockchainUserRecord type="Current ETH Balance" data={accounts.balance} />
                                </>
                            }
                            {accounts === null && <CtaBtn btnText="connect" action={connectWallet} />}
                        </ExchangeNav>
                        <SwapWidgets ref={swapWidgetsRef}>
                            <SwapWidgetBox>
                                {accounts !== null && <SwapWidget hideConnectionUI={true} width="20vw" />}
                                {accounts === null &&
                                    <LockedBox>
                                        <CtaBtn btnText="connect" action={connectWallet} />
                                    </LockedBox>}
                            </SwapWidgetBox>
                            <SwapWidgetBox ref={oneInchSwapWidgetRef}>
                                {accounts === null ?
                                    <LockedBox>
                                        <CtaBtn btnText="connect" action={connectWallet} />
                                    </LockedBox> : null}
                            </SwapWidgetBox>
                        </SwapWidgets>
                        <MoveArrows ref={swapWidgetsRef} />
                    </>
                }
            </div>
            {isProviderMissing || error.isError ?
                <ErrorPopup errReason={error.errorReason} errDescription={error.errorDescription} /> : null
            }
            <Footer />
            {isLoading &&
                <Loader />}

        </>
    )
}