# KenRes

Dutch plate research tool 
| small tool intended for private use and made for fun, car lookup (researching) plate possibilities.

Use at your own discretion 

## How to use 

1. Open up a terminal 
2. Git the project 
```
git clone https://github.com/Trigstur/KenRes.git
```
3. Open the project folder
```
cd KenRes
```
4. Utilise the project
```
php index.php (plate)
```

- You may define missing characters from the plate you are looking up with `#` 
- You may define missing numerics from the plate you are looking up with `@` 
- You may define missing numerics/characters from the plate you are looking up with `~` 

Example 

```
php index.php GH~45H~
```
or

```
php index.php GH-5@5-H#
```

### Dependecies 

Utilises both PHP and RDW's Data Sets 
