const data = {

    "form": {
        "section1": [
            {
                "title": "Step 1",
                "field": [
                    {
                        "name": "FirstName",
                        "lable": "First Name",
                        "required": true,
                        "data_type": "integer",
                        "type": "textbox",
                    },
                    {
                        "name": "LastName",
                        "lable": "Last Name",
                        "required": true,
                        "data_type": "integer",
                        "type": "textbox",
                    },
                    {
                        "name": "email",
                        "lable": "Email",
                        "required": true,
                        "data_type": "string",
                        "type": "email",
                    },
                ]
            }
        ],
        "section2": [
            {
                "title": "Step 2",
                "select":[
                    {
                        "name": "gender",
                        "lable": "Gender",
                        "required": false,
                        "data_type": "string",
                        "type": "select",
                        "options":[
                            {
                                "option": "Select Gender",
                            },
                            {
                                "option": "Male",
                                "value": "male"
                            },
                            {
                                "option": "Female",
                                "value": "female"
                            }
                        ]
                    },
                ],
                "field": [
                    {
                        "name": "age",
                        "lable": "Age",
                        "required": false,
                        "data_type": "number",
                        "type": "number",
                    },
                    {
                        "name": "phone",
                        "lable": "Phone",
                        "required": true,
                        "data_type": "number",
                        "type": "number",
                    },
                ]
            }
        ]
    }
}
export default data