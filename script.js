let students = [];

// Get the form and table elements
const form = document.getElementById('student-form');
const table = document.getElementById('student-table');
const search = document.getElementById('search');

// Add event listener to the form
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const regNo = document.getElementById('regNo').value;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const course = document.getElementById('course').value;
    const year = document.getElementById('year').value;
    const semester = document.getElementById('semester').value;
    const module1 = document.getElementById('module1').value;
    const module2 = document.getElementById('module2').value;
    const module3 = document.getElementById('module3').value;
    const module4 = document.getElementById('module4').value;
    const module5 = document.getElementById('module5').value;
    const module6 = document.getElementById('module6').value;
    const module7 = document.getElementById('module7').value;
    const module8 = document.getElementById('module8').value;

    // Create a new student object
    const student = {
        regNo,
        name,
        email,
        phone,
        course,
        year,
        semester,
        module1,
        module2,
        module3,
        module4,
        module5,
        module6,
        module7,
        module8
    };

    // Add the student to the array
    students.push(student);

    // Clear the form
    form.reset();

    // Update the table
    updateTable();
});

// Add event listener to the search input
search.addEventListener('input', () => {
    const searchTerm = search.value.toLowerCase();
    const filteredStudents = students.filter((student) => {
        return student.name.toLowerCase().includes(searchTerm) || student.regNo.toLowerCase().includes(searchTerm);
    });
    updateTable(filteredStudents);
});

// Function to update the table
function updateTable(studentsToDisplay = students) {
    const tbody = table.getElementsByTagName('tbody')[0];
    tbody.innerHTML = '';
    studentsToDisplay.forEach((student) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${student.regNo}</td>
            <td>${student.name}</td>
            <td>${student.email}</td>
            <td>${student.phone}</td>
            <td>${student.course}</td>
            <td>${student.year}</td>
            <td>${student.semester}</td>
            <td>${student.module1}</td>
            <td>${student.module2}</td>
            <td>${student.module3}</td>
            <td>${student.module4}</td>
            <td>${student.module5}</td>
            <td>${student.module6}</td>
            <td>${student.module7}</td>
            <td>${student.module8}</td>
        `;
        tbody.appendChild(row);
    });
}
