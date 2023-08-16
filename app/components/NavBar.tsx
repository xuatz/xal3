import { useState } from "react";
import { Link } from "@remix-run/react"

export const NavBar = () => {
    const LINK_STYLE = "flex rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-yellow-700 shadow-sm hover:bg-yellow-50 sm:px-8"
    const [searchInput, setSearchInput] = useState("");

    const onChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchInput(e.target.value)
    }
    const onSubmitSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(searchInput)
    }

    return (
        <div className="flex justify-between py-1">
            <div className="flex gap-2">
                <img className="w-11 h-11 ml-2" src="https://i.pinimg.com/originals/ed/3b/ee/ed3beefd69c83e86241a31c001dd2f1a.png" alt="cat as xal3 icon"/>
                <Link to="/" className={LINK_STYLE}>
                    Home
                </Link>
            </div>
            <form className="flex gap-2" onSubmit={onSubmitSearch}>
                <input type="text" className="border px-4 text-base font-medium shadow-sm" value={searchInput} onChange={onChangeSearchInput}/>
                <button className="border rounded-md px-4 text-base font-medium text-yellow-700 shadow-sm hover:bg-yellow-50 sm:px-8" type="submit">Search!</button>
            </form>
        </div>
    )
}