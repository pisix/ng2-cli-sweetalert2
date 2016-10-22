# ng2-cli-sweetalert2

A sweet alert2 wrapper service that works in angular 2.

### install
```
npm install ng2-cli-sweetalert2
```

### set up `angular-cli.json`
In the `angular-cli.json` file you'll need to add references to the `sweetalert2` javascript and css files. To do this, all you need to do is

```
...
"styles": [
  ...
  "../node_modules/sweetalert2/dist/sweetalert2.min.css"
],
"scripts": [
  "../node_modules/sweetalert2/dist/sweetalert2.min.js"
],
...
```


### use
In the module that you want to use it in, import it using `import { SweetAlertService } from 'ng2-cli-sweetalert2';`

Then add to the `providers` array in the `@Component` definition:

```
@Component({
  selector: 'some-component',
  templateUrl: 'some-component.component.html',
  providers: [SweetAlertService]
})
```

Then at the top of your class, create a variable called `swal` and give it a type of `SweetAlertService`. Then define it in your constrctor and set your variable equal to it.

```
swal: SweetAlertService;
constructor(private _swal: SweetAlertService) {
  this.swal = this._swal;
}
```


Now you can use any of the `sweetalert2` methods like

```
this.swal.success(
  {title: 'Are you sure?',
  text: 'You will not be able to recover this imaginary file!',
  showCancelButton: true,
  confirmButtonText: 'Yes, delete it!',
  cancelButtonText: 'No, keep it'}
).then(function(success) {
  console.log("Clicked confirm");
}, function() {
  console.log("Clicked cancel");
});
```

### build process

Transpile to javascript and generate a source map via **npm run build**