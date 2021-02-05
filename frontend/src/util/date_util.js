export const timeDisplay = date => {
    let d = new Date(date);
    let today = new Date();
    if(today - (24 * 60 * 60 * 1000 * 2) < d){
        let t = d.toLocaleTimeString();
        if (today - (24 * 60 * 60 * 1000) < d) {
            return `Today at ${t.split(" ")[0].split(":").slice(0, 2).join(":") + " " + t.split(" ")[1] }`;
        }else{
            return `Yesterday at ${t.split(" ")[0].split(":").slice(0, 2).join(":") + " " + t.split(" ")[1] }`;
        }
    }else{
        return d.toLocaleDateString();
    }
}