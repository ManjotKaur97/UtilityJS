const cube = (base,power=3) => {
    if(power!=0)
        return base * cube(base,power-1);
    else
        return 1;
}
module.exports = cube;
