
export function AuthForm({formClass,children}) {
    return (
        <div className={formClass ? `auth__form ${formClass}` : "auth__form"}>
            <form>
                {children}
            </form>
        </div>
    )
}