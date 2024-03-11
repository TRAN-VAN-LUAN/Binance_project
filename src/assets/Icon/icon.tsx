export const Logo = ({
    className,
    width = '2.6rem',
    height = '2.6rem',
}: {
    className?: string;
    width?: string;
    height?: string;
}) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 5120 1024"
        className={className}
        fill="currentColor"
    >
        <path
            d="M230.997333 512L116.053333 626.986667 0 512l116.010667-116.010667L230.997333 512zM512 230.997333l197.973333 197.973334 116.053334-115.968L512 0 197.973333 314.026667l116.053334 115.968L512 230.997333z m395.989333 164.992L793.002667 512l116.010666 116.010667L1024.981333 512l-116.992-116.010667zM512 793.002667l-197.973333-198.997334-116.053334 116.010667L512 1024l314.026667-314.026667-116.053334-115.968L512 793.002667z m0-165.973334l116.010667-116.053333L512 396.032 395.989333 512 512 626.986667z m1220.010667 11.946667v-1.962667c0-75.008-40.021333-113.024-105.002667-138.026666 39.978667-21.973333 73.984-58.026667 73.984-121.002667v-1.962667c0-88.021333-70.997333-145.024-185.002667-145.024h-260.992v561.024h267.008c126.976 0.981333 210.005333-51.029333 210.005334-153.002666z m-154.026667-239.957333c0 41.984-34.005333 58.965333-89.002667 58.965333h-113.962666V338.986667h121.984c52.010667 0 80.981333 20.992 80.981333 58.026666v2.005334z m31.018667 224c0 41.984-32.981333 61.013333-87.04 61.013333h-146.944v-123.050667h142.976c63.018667 0 91.008 23.04 91.008 61.013334v1.024z m381.994666 169.984V230.997333h-123.989333v561.024h123.989333v0.981334z m664.021334 0V230.997333h-122.026667v346.026667l-262.997333-346.026667h-114.005334v561.024h122.026667v-356.010666l272 356.992h104.96z m683.946666 0L3098.026667 228.010667h-113.962667l-241.024 564.992h127.018667l50.986666-125.994667h237.013334l50.986666 125.994667h130.005334z m-224.981333-235.008h-148.992l75.008-181.973334 73.984 181.973334z m814.037333 235.008V230.997333h-122.026666v346.026667l-262.997334-346.026667h-114.005333v561.024h122.026667v-356.010666l272 356.992h104.96z m636.970667-91.008l-78.976-78.976c-44.032 39.978667-83.029333 65.962667-148.010667 65.962666-96 0-162.986667-80-162.986666-176v-2.986666c0-96 67.968-174.976 162.986666-174.976 55.978667 0 100.010667 23.978667 144 62.976l78.976-91.008c-51.968-50.986667-114.986667-86.997333-220.970666-86.997334-171.989333 0-292.992 130.986667-292.992 290.005334V512c0 160.981333 122.965333 288.981333 288 288.981333 107.989333 1.024 171.989333-36.992 229.973333-98.986666z m527.018667 91.008v-109.994667h-305.024v-118.016h265.002666v-109.994667h-265.002666V340.992h301.013333V230.997333h-422.997333v561.024h427.008v0.981334z"
            p-id="2935"
        ></path>
    </svg>
);

export const IconChervo = ({
    className,
    width = '2.6rem',
    height = '2.6rem',
}: {
    className?: string;
    width?: string;
    height?: string;
}) => (
    <svg className={className} width={width} height={height} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.11 12.178L16 8.287l1.768 1.768-5.657 5.657-1.768-1.768-3.889-3.889 1.768-1.768 3.889 3.89z"
            fill="currentColor"
        ></path>
    </svg>
);

export const IconSearch = ({
    className,
    width = '2.6rem',
    height = '2.6rem',
}: {
    className?: string;
    width?: string;
    height?: string;
}) => (
    <svg className={className} width={width} height={height} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11 6C13.7614 6 16 8.23858 16 11C16 13.7614 13.7614 16 11 16C8.23857 16 6 13.7614 6 11C6 8.23858 8.23858 6 11 6ZM11 3C15.4183 3 19 6.58172 19 11C19 12.3907 18.6451 13.6985 18.021 14.8379L21.0915 17.9086L19.5006 19.4995L17.9097 21.0904L14.8396 18.0201C13.6999 18.6448 12.3914 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3Z"
            fill="currentColor"
        ></path>
    </svg>
);

export const IconUser = ({
    className,
    width = '2.6rem',
    height = '2.6rem',
}: {
    className?: string;
    width?: string;
    height?: string;
}) => (
    <svg className={className} width={width} height={height} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3ZM14.5 9.5C14.5 10.8807 13.3807 12 12 12C10.6193 12 9.5 10.8807 9.5 9.5C9.5 8.11929 10.6193 7 12 7C13.3807 7 14.5 8.11929 14.5 9.5ZM12 13.9961H8.66662C7.97115 13.9961 7.37518 14.7661 7.12537 15.5161C7.73252 16.4634 9.45831 17.9803 12 18.0023C14.5416 18.0243 16.3061 16.3616 16.8745 15.5161C16.6247 14.7661 16.0288 13.9961 15.3333 13.9961H12Z"
            fill="currentColor"
        ></path>
    </svg>
);

export const IconWallet = ({
    className,
    width = '2.6rem',
    height = '2.6rem',
}: {
    className?: string;
    width?: string;
    height?: string;
}) => (
    <svg className={className} width={width} height={height} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4 8.5C4 6.01472 6.01472 4 8.5 4H20V20H8.5C6.01472 20 4 17.9853 4 15.5V8.5ZM8.5 7H17V10H8.5C7.67157 10 7 9.32843 7 8.5C7 7.67157 7.67157 7 8.5 7ZM13 13H17V17H13V13Z"
            fill="currentColor"
        ></path>
    </svg>
);
export const iconNotification = ({
    className,
    width = '2.6rem',
    height = '2.6rem',
}: {
    className?: string;
    width?: string;
    height?: string;
}) => (
    <svg className={className} width={width} height={height} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 3C8.13401 3 5 6.13401 5 10L5 13L4 14V16H5L19 16H20L20 14L19 13V10C19 6.13401 15.866 3 12 3ZM12 21C9.94965 21 8.18757 19.7659 7.41602 18H16.5839C15.8124 19.7659 14.0503 21 12 21Z"
            fill="currentColor"
        ></path>
    </svg>
);

export const IconDownload = ({
    className,
    width = '2.6rem',
    height = '2.6rem',
}: {
    className?: string;
    width?: string;
    height?: string;
}) => (
    <svg className={className} width={width} height={height} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.5 6V9H4.5V3H5H7.5H16H19V6V9H16V6H7.5ZM5 21H4.5V15H7.5V18H16V15H19V18V21H16H7.5H5ZM13.5088 12.0024L16.0176 12.0078L12.0088 16.0166L8 12.0078L10.5088 11.9832V8H13.5088V12.0024Z"
            fill="currentColor"
        ></path>
    </svg>
);

export const IconLanguage = ({
    className,
    width = '2.6rem',
    height = '2.6rem',
}: {
    className?: string;
    width?: string;
    height?: string;
}) => (
    <svg className={className} width={width} height={height} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.23 20.403a9.011 9.011 0 005.684-7.153h-3.942c-.147 2.86-.793 5.388-1.741 7.153zm-.757-7.153c-.178 4.102-1.217 7.25-2.473 7.25-1.256 0-2.295-3.148-2.473-7.25h4.946zm0-2.5H9.527C9.705 6.648 10.744 3.5 12 3.5c1.256 0 2.295 3.148 2.473 7.25zm2.499 0h3.942a9.01 9.01 0 00-5.683-7.153c.948 1.765 1.594 4.293 1.741 7.153zm-9.936 0c.147-2.862.793-5.392 1.743-7.156a9.01 9.01 0 00-5.693 7.156h3.95zm0 2.5h-3.95a9.01 9.01 0 005.693 7.157c-.95-1.765-1.596-4.295-1.743-7.157z"
            fill="currentColor"
        ></path>
    </svg>
);

export const IconDeposit = ({
    className,
    width = '2.6rem',
    height = '2.6rem',
}: {
    className?: string;
    width?: string;
    height?: string;
}) => (
    <svg className={className} width={width} height={height} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.5 3H10.5V9.94961L10.197 9.94695L6.03809 9.98779L12.0129 15.9626L17.9878 9.98779L13.8115 9.9787L13.5 9.97597V3ZM3.5 14H6.5V18H17.5V14H20.5V18V21H3.5V18V14Z"
            fill="currentColor"
        ></path>
    </svg>
);
