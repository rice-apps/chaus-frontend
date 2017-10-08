var context = require.context('./src', true, /^((?!index.js).)*\.jsx?$/);
context.keys().forEach(context);
