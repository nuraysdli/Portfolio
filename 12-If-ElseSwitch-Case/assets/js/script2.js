let moon = prompt("Enter season:\nSpring\nWinter\nSummer\nAutumn");

switch (moon) {
    case Spring:
        alert("March, April, May");
        break;
    case 2:
        alert("December, January, February");
        break;
    case 3:
        alert("June, July, August");
        break;
    case 4:
        alert("September, October, Nowember");
        break;
    default:
        alert("There is no such season.")
        break;
}