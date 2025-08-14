
document.querySelector("#calcBtn").addEventListener("click", function () {
            let name = document.querySelector("#name").value;
            let studentCode = document.querySelector("#studentCode").value;
            let s1 = Number(document.querySelector("#subject1").value);
            let s2 = Number(document.querySelector("#subject2").value);
            let s3 = Number(document.querySelector("#subject3").value);
            if (name === ""||studentCode ==="" ) {
                alert("Please enter the student's name and studentCode");
                return ;
            }

            if (name.length < 4) {
            alert("The student's name must be at least 4 characters long");
              return;
    }



            let average = (s1 + s2 + s3) / 3;
            let grade = "";

            if (average >= 85) {
                grade = "Excellent";
                document.querySelector("#result").style.backgroundColor = "green";
                document.querySelector("#result").style.color = "white";
            } else if (average >= 75) {
                grade = "Very good"
                document.querySelector("#result").style.backgroundColor = "blue";
                document.querySelector("#result").style.color = "white";
            } else if (average >= 65) {
                grade = "Good";
                document.querySelector("#result").style.backgroundColor = "orange";
                document.querySelector("#result").style.color = "white";
            } else if (average >= 50) {
                grade = "Acceptable";
                document.querySelector("#result").style.backgroundColor = "yellow";
                document.querySelector("#result").style.color = "black";
            } else {
                grade = "Weak";
                document.querySelector("#result").style.backgroundColor = "red";
                document.querySelector("#result").style.color = "white";
            }
          document.querySelector("#result").innerHTML =
                "Student " + name + " He got appreciation : " + grade + " (Average:% " + average.toFixed(2) + ")";


        });
