var ExportModuleTest = require('export-test')

console.log(ExportModuleTest.value);

ExportModuleTest.func(300, 800);

console.log(ExportModuleTest.obj.name);
console.log(ExportModuleTest.obj.add(300, 700));
console.log(ExportModuleTest.obj.add(2000, 700));