import { Component } from "@angular/core";
import { TIMELINE_ENTRIES, TimelineEntry } from "../data/timeline";

@Component({
  selector: "app-timeline",
  templateUrl: "./timeline.component.html",
  styleUrls: ["./timeline.component.css"],
})
export class TimelineComponent {
  entries: TimelineEntry[] = TIMELINE_ENTRIES;
}
