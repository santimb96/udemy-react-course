import React from "react";

export default function Footer(){
    return (
        <footer className="container-fluid bg-dark d-flex justify-content-center align-items-center">
            <div>
                <p className="p-4 text-light">Santi Martínez, {new Date().getFullYear()}</p>
            </div>
        </footer>
    );
}