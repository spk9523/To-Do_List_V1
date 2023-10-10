function getDate () {
    const today = new Date();

    const options = {
        weekday : "long",
        day: "numeric",
        month: "long"
    };

    const day = today.toLocaleDateString("us-EN",options);

    return day;
}

function getDay () {
    const today = new Date();

    const options = {
        weekday : "long",
    };

    const day = today.toLocaleDateString("us-EN",options);

    return day;
}

export default {getDate,getDay};