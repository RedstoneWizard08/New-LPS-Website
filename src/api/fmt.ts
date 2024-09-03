export const formatNumber = (num: number) => {
    const fmt = new Intl.NumberFormat("en-US", {
        notation: "compact",
        maximumFractionDigits: 2,
    });

    return fmt.format(num);
};
