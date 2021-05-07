# Allowance Mock Server

## How to use
Start the project using the command:
```
$ npm start
```

## Available Endpoints

### List
```
GET /allowance_order
```

### Get details
```
GET /allowance_order/:id
```

### Create
```
POST /allowance_order
```

Make the requets with this payload:
```
{
  "allowances": [
    {
      "fullName": "Jonh Paul",
      "amounts": [
        {
          "category": "FOOD",
          "amount": 3534
        },
        {
          "category": "MEAL",
          "amount": 300
        }
      ]
    }
  ]
}
```

### Update
```
PUT /allowance_order/:id
```
Make the requets with this payload:
```
{
  "allowances": [
    {
      "fullName": "Jonh Paul",
      "amounts": [
        {
          "category": "FOOD",
          "amount": 3534
        },
        {
          "category": "MEAL",
          "amount": 300
        }
      ]
    }
  ]
}
```

### Delete
```
DELETE /allowance_order/:id
```
