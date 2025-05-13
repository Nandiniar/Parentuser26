import { Component,Input} from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
@Input() user:string='' // @Input parent wale data se user ko data degaa
@Input() city:string=''
} 
