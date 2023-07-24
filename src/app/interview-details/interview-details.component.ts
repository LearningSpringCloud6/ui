import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-interview-details',
  templateUrl: './interview-details.component.html',
  styleUrls: ['./interview-details.component.css']
})
export class InterviewDetailsComponent {
  title = 'Interview Details Form';
  constructor(private http:HttpClient) {
    
  }
  getInterviewDetails() {
    this.http.get("http:localhost:8089/interview/api/interview-details").subscribe(resp=>
      console.log("response: "+resp)
    );
  }
  submitInterviewDetails(item:any)
  {
    this.http.post("http:localhost:8089/interview/api/interview-details/{candidateId}",item).subscribe(resp=>
      console.log("response: "+resp)
    );
    console.log(item);
  }
}
