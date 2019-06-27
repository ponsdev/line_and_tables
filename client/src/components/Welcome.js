import React from "react";

class Welcome extends React.Component {
    render() {
        return (
            <div
                style={{
                    textAlign: "center",
                    marginTop: "150px"
                }}
            >
                <div className="bgImg">
                    <img
                        src="https://botabota.ca/wp-content/uploads/2018/11/Thom-44.jpg"
                        alt="teste"
                    />
                </div>
                <h1>Pra que fila?!</h1>
                <a href="/ui">
                    <h2>Entrar!</h2>
                </a>
            </div>
        );
    }
}

export default Welcome;
