import loading from '../assets/loading.gif';

const Loading = () => {
    
    return (
        <div className="loading-container">
            <img src={loading} alt="Loading" className="loading" id="loading" />
            <div className="container">
                <div className="loader">
                    <div className="circle" id="a"></div>
                    <div className="circle" id="b"></div>
                    <div className="circle" id="c"></div>
                </div>
            </div>
        </div>
    )

}

export default Loading
