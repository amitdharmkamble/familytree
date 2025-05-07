import { Component, AfterViewInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-dtree-family-tree',
  templateUrl: './dtree-family-tree.component.html',
  styleUrls: ['./dtree-family-tree.component.css']
})
export class DtreeFamilyTreeComponent implements AfterViewInit {

  treeData = [{
    name: "Niclas Superlongsurname",
    class: "man",
    textClass: "emphasis",
    marriages: [{
      spouse: {
        name: "Iliana",
        class: "woman",
        extra: { nickname: "Illi" }
      },
      children: [{
        name: "James",
        class: "man",
        marriages: [{
          spouse: { name: "Alexandra", class: "woman" },
          children: [
            { name: "Eric", class: "man", marriages: [{ spouse: { name: "Eva", class: "woman" } }] },
            { name: "Jane", class: "woman" },
            { name: "Jasper", class: "man" },
            { name: "Emma", class: "woman" },
            { name: "Julia", class: "woman" },
            { name: "Jessica", class: "woman" }
          ]
        }]
      }]
    }]
  }];

  ngAfterViewInit() {
  }
}
