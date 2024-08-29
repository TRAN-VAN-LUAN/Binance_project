export const countDown = (
    date: number,
    setDay: (data: number) => void,
    setHour: (data: number) => void,
    setMinute: (data: number) => void,
    setSeconds?: (data: number) => void,
) => {
    const countDownInterval = setInterval(() => {
        let now = new Date().getTime();
        let distance = date - now;
        setDay(Math.floor(distance / (1000 * 60 * 60 * 24)));
        setHour(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        setMinute(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
        setSeconds && setSeconds(Math.floor((distance % (1000 * 60)) / 1000));
        if (distance < 0) {
            clearInterval(countDownInterval);
        }
    }, 1000);
};
