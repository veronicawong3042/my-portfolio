import loading from '../assets/loading.gif';

const Loading = () => {
    
    return (
        <div className="loading-container">
            <img src={loading} alt="Loading" className="loading" id="loading" />
            <div class ="container">
            <div class="loader">
                <div class="circle" id="a"></div>
                <div class="circle" id="b"></div>
                <div class="circle" id="c"></div>
            </div>
    </div>
        </div>
    )

}

export default Loading
