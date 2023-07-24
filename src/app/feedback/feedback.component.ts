import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {
  constructor(private http:HttpClient) {}

  saveFeedback(feedback:any) {
    this.http.post("http:localhost:8089/feedback/api/save-feedback",feedback).subscribe(resp=>
      console.log("response: "+resp)
    );
  }

  getFeedBackHistory() {
    this.http.get("http:localhost:8089/feedback/api/get-feedback-history/{email}").subscribe(resp=>
    console.log("response: "+resp)
  );
  }

  //TODO: need to check the put functionality
  updateFeedback() {
    this.http.put("http:localhost:8089/feedback/api/update-feedback/{id}","").subscribe(resp=>
    console.log("response: "+resp)
  );
  }

}
