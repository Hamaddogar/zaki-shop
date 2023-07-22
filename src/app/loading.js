import styles from '@/app/styles/common.module.css'

const Loading = () => {
    return (
        <div className={styles.loading_section}>
            {/* <div className={styles.loading}>
            </div> */}
            {icon}
        </div>
    );
};

export default Loading;

const icon = <svg xmlns="http://www.w3.org/2000/svg" width="246" height="188" viewBox="0 0 246 188" fill="none">
    <g filter="url(#filter0_i_136_10079)">
        <path d="M52.0803 18.2687L51.9683 18.3275L51.9512 18.3345C50.9258 18.7498 49.8898 19.2028 48.8611 19.7055C32.8866 27.4031 22.3907 42.6997 19.6132 59.7463C13.4443 61.5211 9.60759 66.1326 7.42947 71.4392C4.9567 77.4637 4.41357 84.7326 4.51042 90.9838C4.51601 102.73 7.26852 110.409 11.1481 115.36C13.6647 118.572 16.4895 120.424 18.9195 121.488C19.7586 141.196 30.8317 159.64 48.9336 168.306C49.9023 168.774 50.8837 169.209 51.8698 169.616C51.8917 169.626 51.9447 169.65 51.998 169.673C52.0844 169.711 52.2312 169.774 52.4202 169.84C53.0105 170.076 53.5803 170.295 54.174 170.515C75.4981 178.889 98.7195 183.5 122.989 183.5C147.277 183.5 170.497 178.89 191.815 170.517C192.414 170.297 192.987 170.077 193.575 169.84C193.727 169.787 193.849 169.738 193.928 169.705C193.962 169.691 193.993 169.677 194.02 169.666C194.047 169.654 194.07 169.644 194.085 169.637L194.126 169.619C195.1 169.213 196.082 168.779 197.058 168.31C214.869 159.784 225.872 141.808 227.03 122.467C232.894 120.55 236.546 116.006 238.634 110.841C241.057 104.846 241.588 97.6396 241.489 91.4308C241.483 79.4565 238.623 71.7101 234.629 66.7737C231.972 63.4901 229.003 61.6835 226.528 60.6934C223.99 43.2698 213.405 27.5448 197.138 19.7029C196.114 19.2053 195.087 18.7531 194.053 18.3345L193.955 18.2945L193.84 18.2397L193.713 18.1883C193.076 17.9308 192.461 17.6933 191.814 17.4562C170.494 9.08727 147.275 4.5 122.989 4.5C98.7228 4.5 75.501 9.08258 54.1735 17.4586C53.5377 17.6936 52.9294 17.9286 52.2938 18.1833L52.0803 18.2687Z" stroke="url(#paint0_radial_136_10079)" stroke-width="9" />
    </g>
    <defs>
        <filter id="filter0_i_136_10079" x="-0.000244141" y="0" width="246" height="192" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="9" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.858333 0 0 0 0 0.864 0 0 0 0 1 0 0 0 0.25 0" />
            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_136_10079" />
        </filter>
        <radialGradient id="paint0_radial_136_10079" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(-110.953 94.1561) scale(375.173 504.655)">
            <stop offset="0.328125" stop-color="#39FCBF" />
            <stop offset="1" stop-color="#2037F0" stop-opacity="0.75" />
        </radialGradient>
    </defs>
</svg>