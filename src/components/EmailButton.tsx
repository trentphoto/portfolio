import clsxm from "@/lib/clsxm";
import { data } from "@/lib/data";
import { useState } from "react";
import { FaCheck, FaCopy, FaEnvelope } from "react-icons/fa";
import ButtonLink from "./links/ButtonLink";

export default function EmailButton() {
    const [copied, setCopied] = useState(false);
    function copyToClipboard() {
        navigator.clipboard.writeText(data.email);
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }
        , 2000);
    }
    return (
        <>
            <div className="flex items-center gap-4 px-10 py-4 bg-gray-100 text-gray-700 rounded-full hover:bg-primary-100 active:bg-primary-100 disabled:bg-gray-300 cursor-pointer" onClick={copyToClipboard}>
                <FaEnvelope className="text-4xl text-primary-600 mr-4" />
                <div className="flex flex-col items-start gap-1">
                    <span className={clsxm("flex gap-1 items-center", copied ? "text-primary-600" : "text-gray-700")}>
                        { copied ? <FaCheck className="" /> : <FaCopy className="" />}
                        <span className="text-sm">{copied ? "Copied!" : "Click to copy"}</span>
                    </span>
                    <span className="text-xl font-bold">{data.email}</span>
                </div>
            </div>
        </>
    )
}
