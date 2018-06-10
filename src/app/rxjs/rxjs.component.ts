import { Component, OnInit } from '@angular/core';
import 'rxjs/Rx';
import { of, from, interval, timer, fromEvent, Subject, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';
import { fromPromise } from 'rxjs/internal-compatibility';






@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit{
    
     //searchterm = new Subject<string>();

   ngOnInit(): void {
    
    const myarray =from([1,1,1,1,1,2,2,3,3,3,6,4,6,6,4,8,99,7,99]);
    const distinct = myarray.distinctUntilChanged().subscribe(x => console.log(x));





    //  const  ob1=of('dfs','darewr','rutyiuyo','uifhufhp');
    //  let ob2=of('12340','239947','5646','646631');
     
    //  ob2 =ob2.delay(5000);

    //  const summary = forkJoin(ob1,ob2);
    //  summary.subscribe(x => console.log(x))

  




        // this.searchterm.throttleTime(2000).subscribe(
        // //.debounceTime(2000).subscribe(
        //   (x)=> {
        //     console.log(x);
        //   }
        // )


  



    //  const promise =new Promise ((resolve , reject) =>  { 
    //      setTimeout(() => {
    //      resolve('from promise')
    //    }, 2000);    
    // });





    //  const source = of('Eil', 't')
                    //  .do(x => console.log('beformap', x))
                    //  .map (x => x.toUpperCase())
                    //  .do(x => console.log('aftermap', x));
                    // fromPromise(promise); 
                    // const promise2 =source.toPromise();
                    // fromEvent(document , 'click');
                    // timer(5000);
                    // interval(1000);
                    // from([1, 2 ,3, 6, 5, 3 ,3])
                    // .map((x)=> {return x * 2 ; });
                    // .filter((x) => x == 6);



     //const subscribe =source.subscribe( 
                     // source.finally( ()  =>  alert('done') ).subscribe(
                  //    (x)=> { console.log(x);
                    //.finally(()=> console.log('done')).subscribe()
                    //  subscribe.unsubscribe();
//  });             
                    
}}