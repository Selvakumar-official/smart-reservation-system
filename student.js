// js/student.js

// Check if student is logged in
firebase.auth().onAuthStateChanged(function(user) {
    if (!user) {
        alert("Please login first");
        window.location = "student-login.html";
    }
});

// Logout function
function logout(){
    firebase.auth().signOut().then(function(){
        alert("Logged out successfully");
        window.location = "student-login.html";
    });
}

// Get student bus route (example)
function getStudentRoute(studentId){
    firebase.database()
    .ref("students/" + studentId)
    .once("value")
    .then(function(snapshot){
        let data = snapshot.val();
        console.log("Student Route:", data.bus_route);
    });
}
