
# resize-api

A simple image resizing api made with express and nodejs

## Changelog
- Added a ts parser for typescript
- Added prettier as a dev dependency
- Fixed a broken .eslintrc.js file 
- Eslint and prettier now work on typescript not on javascript
- Added jasmine tests for sharp 
- Added Error handling in the image processing
## Guide

To Start this project run

```bash
  npm run start
```

To build the project only
```bash
  npm run build
```
## Running Tests

For Jasmine tests 

```bash
  npm run test
```

For Eslint with prettier
```bash
  npm run lint
```
## Usage/Examples
/api/images?filename={filename}&width={width}&height={height}
```javascript
/api/images?filename=test&width=100&height=100
/api/images?filename=sky&width=100&height=100
```
