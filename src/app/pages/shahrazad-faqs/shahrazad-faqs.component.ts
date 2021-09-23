import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shahrazad-faqs',
  templateUrl: './shahrazad-faqs.component.html',
  styleUrls: ['./shahrazad-faqs.component.scss']
})
export class ShahrazadFaqsComponent implements OnInit {

  faqItems = [{

    title: 'Shipping Information',
    faqDetails: [{ faqTitle: 'How will my parcel be delivered?', rep: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.' },
    { faqTitle: 'Do I pay for delivery?', rep: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.' },
    { faqTitle: 'Will I be charged customs fees?', rep: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.' },
    { faqTitle: 'My item has become faulty', rep: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.' }]

  },
  {

    title: 'Orders and Returns',
    faqDetails: [{ faqTitle: 'I haven’t received my order', rep: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.' },
    { faqTitle: 'How can I return an item?', rep: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.' }]

  },
  {

    title: 'Payments',
    faqDetails: [{ faqTitle: 'What payment types can I use?', rep: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.' },
    { faqTitle: 'Can I pay by Gift Card?', rep: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.' },
    { faqTitle: "I can't make a payment", rep: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.' },
    { faqTitle: 'Has my payment gone through?', rep: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.' }]

  },
  ]
  constructor() { }

  ngOnInit(): void {
    console.log(this.faqItems)
  }

}
