# Auth

## Login
```
method : POST
url : /auth/login
request body : {
  username : ....,
  password : ....
}
response : {
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImNpaHV5IiwiaWQiOjYsImRlcGFydGVtZW50X2lkIjoxLCJpYXQiOjE2NDk3Mjc3MjMsImV4cCI6MTY0OTgxNDEyM30.xSWisxzDVJkRNULTGAAR2txDEagWN7_EY7gXknMQgg0"
}
```

## Register

```
method : POST
url : /auth/register
request body : {
  username : ....,
  password : ....,
  departement_id: 1
}
response : {
    "id": 7,
    "username": "arsyad",
    "password": "$2a$10$XkYl.lPR7B6RWDFh/j7wv.kJ9ulT5lotMD5WemWmxzGL01ygujBXi",
    "departement_id": "1"
}
```

# Create

## Create Product
```
method: POST
url : /product
request body : {
  name : test *required,
  description: test
}
response : {
    "id": 6,
    "name": "test produk",
    "description": "ini deskripsi"
}
```

## Create Vendor
``` 
method: POST
url : /vendor
request body : {
  name : test,
  npwp: 9269364937,
  address: jalan jalan ke cikini,
  phone: 08878362872,
  email: test@mail.com
}
response : {
    "id": 3,
    "name": "test produk",
    "npwp": "1968262939",
    "address": "jalan jalan kemana cakeeepp",
    "phone": "6287885487248",
    "email": "arsyadrama@mail.com"
}
```

## Create Status
```
method : POST
url : /status
request body : { name : 'test'}
response : {
    "id": 3,
    "name": "test produk"
}
```

## Create Contract Type
```
method : POST
url : /contract-type
request body : {
  name : test *required,
  description: test
}
response : {
    "id": 6,
    "name": "test produk",
    "description": "ini deskripsi"
}
```

## Create Department
```
method : POST
url : /departement
request body : { name : 'test'}
response : {
    "id": 3,
    "name": "test produk"
}
```

## Create Transaction Contract
```
method : POST
url : /transaction
request body : {
  product_id: 1,
  name_jobs: 'test',
  location_jobs: 'test',
  est_period_start_jobs: '2022-04-07 17:00:00',
  est_period_end_jobs : '2022-04-07 17:00:00',
  est_amount_jobs : 50000,
  description: 'test',
  vendor_id: 1,
  status_id: 1,
  contract_type_id: 1,
  creator: 1,
  created: '2022-04-07 17:00:00'
}
response : {
    "id": 3,
    "product_id": "1",
    "name_jobs": "name jobs",
    "location_jobs": "cikini",
    "est_period_start_jobs": "2022-04-07T17:00:00.000Z",
    "est_period_end_jobs": "2022-04-17T17:00:00.000Z",
    "est_amount_jobs": "5000000",
    "description": "billboard",
    "vendor_id": "1",
    "status_id": "1",
    "contract_type_id": "1",
    "creator": "1",
    "created": "2022-04-07T17:00:00.000Z"
}
```

## Create Role
```
method : POST
url : /role
request body : {
    suspend : 'X',
    name: 'test'
}
response : {
    "id": 4,
    "name": "test",
    "suspend": ""
}
```

# GET

## Get Product
```
method : GET
url : /products
query : {
  page : 1,
  perPage: 20 *default
}
response : {
    "products": {
        "count": 6,
        "rows": [
            {
                "id": 1,
                "name": "Sewa billboard",
                "description": null
            }
        ]
    },
    "totalPage": 6,
    "currentPage": 0
}
```

## Get Vendor
```
method: GET
url : /vendors
query : {
  page : 1,
  perPage: 20 *default
}
response : {
    "vendors": {
        "count": 3,
        "rows": [
            {
                "id": 1,
                "name": "PT. ABC",
                "npwp": "123.123.123.123",
                "address": "Jl. Kosasih no. 1 Jakarta selatan",
                "phone": "021 123456789",
                "email": "test@guslam.com"
            }
        ]
    },
    "totalPage": 3,
    "currentPage": 0
}
```

## Get Status
```
method: GET
url : /status
query : {
  page : 1,
  perPage: 20 *default
}
response : {
    "status": {
        "count": 6,
        "rows": [
            {
                "id": 1,
                "name": "Request"
            }
        ]
    },
    "totalPage": 6,
    "currentPage": 0
}
```

## Get Contract Type
```
method : GET
url : /contract-type
query : {
  page : 1,
  perPage: 20 *default
}
response : {
    "contract_types": {
        "count": 4,
        "rows": [
            {
                "id": 1,
                "name": "Terima jadi (turnkey)",
                "description": "Kontrak pengadaan pekerjaan konstruksi atas penyelesaian seluruh pekerjaan dalam batas waktu tertentu"
            }
        ]
    },
    "totalPage": 4,
    "currentPage": 0
}
```

## Get User
```
method : GET
url : /users
query : {
  page : 1,
  perPage: 20 *default,
  orderBy : 'id' *default',
  sortBy : 'DESC' || 'ASC' -> default DESC,
  userId : 1,
  departmentId : 1
}
response : {
    "users": {
        "count": 7,
        "rows": [
            {
                "id": 7,
                "username": "arsyad",
                "password": "$2a$10$XkYl.lPR7B6RWDFh/j7wv.kJ9ulT5lotMD5WemWmxzGL01ygujBXi",
                "departement_id": 1
            }
        ]
    },
    "totalPage": 7,
    "currentPage": 0
}
```

## Get Departement
```
method : GET
url : /departments
query : {
  page : 1,
  perPage: 20 *default
}
response : {
    "departements": {
        "count": 6,
        "rows": [
            {
                "id": 1,
                "name": "Admin"
            }
        ]
    },
    "totalPage": 6,
    "currentPage": 0
}
```

## Get Transaction
```
method : GET
url : /transactions
query : {
  page : 1,
  perPage: 20 *default
}
response : {
    "transactions": {
        "count": 3,
        "rows": [
            {
                "id": 1,
                "product_id": 4,
                "name_jobs": null,
                "location_jobs": null,
                "est_period_start_jobs": null,
                "est_period_end_jobs": null,
                "est_amount_jobs": null,
                "description": null,
                "vendor_id": 1,
                "status_id": 1,
                "contract_type_id": 1,
                "creator": null,
                "created": "2022-04-03T08:03:14.000Z"
            }
        ]
    },
    "totalPage": 3,
    "currentPage": 0
}
```

## Get Roles
```
method : GET
url : /roles
query : {
    page : 1,
    perPage : 20 *default
}
response : {
    "roles": {
        "count": 4,
        "rows": [
            {
                "id": 1,
                "name": "Administrator",
                "suspend": ""
            },
            {
                "id": 2,
                "name": "Staff",
                "suspend": null
            },
            {
                "id": 3,
                "name": "Manager",
                "suspend": null
            },
            {
                "id": 4,
                "name": "test",
                "suspend": ""
            }
        ]
    },
    "totalPage": 1,
    "currentPage": 0
}
```