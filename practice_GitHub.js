module.exports = {
    beforeEach: browser => {
        browser.url('https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html')
    },
    after: browser => {
        browser.end()
    },
    'Navigating Between Employees': browser => {
        browser
            .verify.visible('span[class="titleText"]')
            .verify.containsText('span[class="titleText"]', 'Employee Manager')
            .click('li[name="employee1"]')
            .verify.containsText('span[name="employeeID"]', '1')
            .click('li[name="employee2"]')
            .verify.containsText('span[name="employeeID"]', '2')
            .click('li[name="employee3"]')
            .verify.containsText('span[name="employeeID"]', '3')
            .click('li[name="employee4"]')
            .verify.containsText('span[name="employeeID"]', '4')
            .click('li[name="employee5"]')
            .verify.containsText('span[name="employeeID"]', '5')
            .click('li[name="employee6"]')
            .verify.containsText('span[name="employeeID"]', '6')
            .click('li[name="employee7"]')
            .verify.containsText('span[name="employeeID"]', '7')
            .click('li[name="employee8"]')
            .verify.containsText('span[name="employeeID"]', '8')
            .click('li[name="employee9"]')
            .verify.containsText('span[name="employeeID"]', '9')
            .click('li[name="employee10"]')
            .verify.containsText('span[name="employeeID"]', '10')
            .pause(2000)
    },
    'Editing and saving an employee': browser => {
        var phoneESE = '8018886021'
        browser
            .click('li[name="employee1"]')
            .click('input[name="phoneEntry"]')
            .clearValue('input[name="phoneEntry"]')
            .setValue('input[name="phoneEntry"]', phoneESE)
            .click('button[name="save"]')
            .verify.value('input[name="phoneEntry"]', phoneESE)
            .pause(2000)
    },
    'Editing and canceling': browser => {
        var phoneEC = '8018886021'
        browser
            .click('li[name="employee1"]')
            .click('input[name="phoneEntry"]')
            .clearValue('input[name="phoneEntry"]')
            .setValue('input[name="phoneEntry"]', phoneEC)
            .click('button[name="cancel"]')
            .verify.value('input[name="phoneEntry"]', '4824931093')
            .pause(2000)
    },
    'Add Employee': browser => {
        var newEmployee = {name:'Adrian Richards', phone:'8018886021', title:'Ultimate Gamer'}
        browser
            .click('li[name="addEmployee"]')
            .pause(1000)
            .click('li[name="employee11"]')
            .click('input[name="phoneEntry"]')
            .clearValue('input[name="phoneEntry"]')
            .setValue('input[name="phoneEntry"]', newEmployee.phone)
            .verify.value('input[name="phoneEntry"]', newEmployee.phone)
            .pause(1000)
            .click('input[name="nameEntry"]')
            .clearValue('input[name="nameEntry"]')
            .setValue('input[name="nameEntry"]', newEmployee.name)
            .verify.value('input[name="nameEntry"]', newEmployee.name)
            .pause(1000)
            .click('input[name="titleEntry"]')
            .clearValue('input[name="titleEntry"]')
            .setValue('input[name="titleEntry"]', newEmployee.title)
            .verify.value('input[name="titleEntry"]', newEmployee.title)
            .pause(1000)
            .click('button[name="save"]')
            .pause(2000)
    },
    'Error Message': browser => {
        var errorEntry = '111111111111111111111111111111111111111111111111111111'
        browser
        .click('li[name="employee1"]')
        .click('input[name="phoneEntry"]')
        .clearValue('input[name="phoneEntry"]')
        .setValue('input[name="phoneEntry"]', errorEntry)
        .click('input[name="nameEntry"]')
        .clearValue('input[name="nameEntry"]')
        .setValue('input[name="nameEntry"]', errorEntry)
        .click('input[name="titleEntry"]')
        .clearValue('input[name="titleEntry"]')
        .setValue('input[name="titleEntry"]', errorEntry)
        .click('button[name="save"]')
        .useXpath()
        .verify.containsText('//div[contains(text(),"The name field")]', 'The name field must be between 1 and 30 characters long.')
        .verify.containsText('//div[contains(text(),"phone")]', 'The phone number must be 10 digits long.')
        .verify.containsText('//div[contains(text(),"The title field")]', 'The title field must be between 1 and 30 characters long.')
        .pause(2000)
    },
}