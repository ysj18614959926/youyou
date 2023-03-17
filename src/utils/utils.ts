const formatDate = (timeStamp:any) => {
    if (timeStamp) {
        const d = new Date(Number(timeStamp));
        const Y = d.getFullYear();
        const M = d.getMonth();
        const D = d.getDate();
        const h = d.getHours();
        const m = d.getMinutes();
        const s = d.getSeconds();
        return `${Y}/${initBit(M)}/${D} ${initBit(h)}:${initBit(m)}:${initBit(s)}`;
    } else {
        return "-";
    }
};
const initBit = (num: number) => {
    return num > 9 ? num : "0" + num;
};
export {
    formatDate
};