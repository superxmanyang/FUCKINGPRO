
export function getToken($th) {
    let t = localStorage.getItem('token'),
        now = new Date().getDate();
        console.log(t,now);
    if (!t) {
        $th.$router.push('./')
    } else if (t != now) {
        $th.$router.push('./')
    } 
}