window.onload =function() {

    document.getElementById("email").onkeyup = () => {
    };

    document.getElementById("password").onkeyup = () => {
    };

    document.getElementById("submit1").onclick = () => {
        if(document.getElementById("email").checkValidity() && 
            document.getElementById("password").checkValidity() &&
            document.getElementById("url").checkValidity())
            alert('Submitted successfully!')
    };
};