const AnimatedWaves = () => {
    return (
        <div className="absolute bottom-0 w-full z-0 overflow-hidden leading-none">
            <svg
                viewBox="0 0 1200 120"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-20"
                preserveAspectRatio="none"
            >
                <path
                    d="M0,0V46.29c47.63,22,103.78,29,158,17.39,70.91-15.7,136.34-57.66,207.25-66.22C495.71-14.06,570.09,30.91,640,49.26c72.09,18.86,146.78-7.37,218-35.58C938.26,2.47,1020.43-3.75,1100,3.92c61.52,6.09,123.31,27.44,160,39V0Z"
                    fill="#fff"
                    opacity="0.2"
                />
            </svg>
        </div>
    );
};

export default AnimatedWaves;
