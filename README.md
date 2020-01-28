# express-service-example
A simple express service example - Two REST APIs are defined to parse the given string in this project. The API assumes that input data is EDI data which has zeros as fillers. So, the first name has a length of 8 characters, last name has a length of 10 characters and client id is 7 digits long.

The uri of these two REST APIs and sample requests/responses are as below. 

<b><u>1. /api/v1/parse</u></b>
<br/>
<b><u>Request Body</b></u>
<pre>
{
    "data": "JOHN0000MICHAEL0009994567"
}
</pre>
<br/>
<b><u>Response Body</b></u>
<pre>
{
    "statusCode": 200,
    "data": {
        "firstName": "JOHN0000",
        "lastName": "MICHAEL000",
        "clientId": "9994567"
    }
}
</pre>
<b><u>2. /api/v2/parse</u></b>
<br/>
<b><u>Request Body</b></u>
<pre>
{
    "data": "JOHN0000MICHAEL0009994567"
}
</pre>
<br/>
<b><u>Response Body</b></u>
<pre>
{
    "statusCode": 200,
    "data": {
        "firstName": "JOHN",
        "lastName": "MICHAEL",
        "clientId": "999-4567"
    }
}
</pre>
