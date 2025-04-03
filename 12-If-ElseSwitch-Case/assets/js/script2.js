let moon = prompt("Enter season:\n1-Spring\n2-Winter\n3-Summer\n4-Autumn");

switch (moon) {
    case 1:
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