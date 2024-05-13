
import {
  AnimationBuilder,
  AnimationPlayer,
  animate,
  style
} from "@angular/animations";
import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  QueryList,
  ViewChildren
} from "@angular/core";
import { UiModule } from "../../modules/ui/ui.module";


@Component({
  selector: 'z-carousel-3d',
  standalone: true,
  imports: [UiModule],
  templateUrl: './z-carousel-3d.component.html',
  styleUrl: './z-carousel-3d.component.scss',
})
export class ZCarousel3dComponent {
  @Input() config:any;
  @Output() changed = new EventEmitter();
  @ViewChildren("cell") items!: QueryList<ElementRef>;
  @ViewChildren("element") itemsView!: QueryList<ElementRef>;
  private player!: AnimationPlayer;
  timer = 450;
  timing = "450ms";
  animates = [0, 2, 7];
  // imgData: Array<any> = [0,1,2,3,4,5,6,7,8]

  cellWidth!:number;
  radius:number=150;
  minScale:number=.5;

  get cellCount(){
    return this.items.length
  }
  selectedIndex = 0;

  movements = [
    { pos: 0, right: [1, 2], left: [8, 7] },
    { pos: 2, right: [3, 4, 5, 6, 7], left: [1, 0] },
    { pos: 7, right: [8, 0], left: [6, 5, 4, 3, 2] }
  ];

  constructor(private builder: AnimationBuilder) {}

  animateViews(direction: string) {
    this.animates.forEach((x: number, index: number) => {
      let mov:any;
      mov = this.movements.find(m => m.pos == x);
      const item = this.itemsView.find((_x, i) => i == index);
      const animations = mov[direction].map((m:any) => {
        const angle = (m * 2 * Math.PI) / 9;
        const scale=(1+this.minScale)/2+(1-this.minScale)/2*Math.cos(angle)
        const applystyle = {
          left: -this.cellWidth/2 + this.radius * Math.sin(angle) + "px",
          transform: "scale(" + scale + ")",
          position: "absolute",
          "z-index": Math.floor(100 * scale)
        };
        return animate(
          this.timer / mov[direction].length + "ms",
          style(applystyle)
        );
      });

      const myAnimation = this.builder.build(animations);
      if(item) {
        this.player = myAnimation.create(item?.nativeElement);
        this.player.onDone(
          () => (this.animates[index] = mov[direction][mov[direction].length - 1])
        );
        this.player.play();
      }
    });
  }

  animateCarousel() {
    this.items.forEach((item: ElementRef, i: number) => {
      const myAnimation = this.builder.build([animate(this.timing, style(this.getStyle(i)!))]);
      this.player = myAnimation.create(item.nativeElement);
      this.player.play();
    });
  }

  getStyle(index: number) {
    if (!this.cellCount) return null;
    const angle = ((index - this.selectedIndex) * 2 * Math.PI) / this.cellCount;
    const scale = (75 + 25 * Math.cos(angle)) / 100;

    return {
      left: -75 + 130 * Math.sin(angle) + "px",
      // left: -70 + 60 * Math.sin(angle) + "px",
      transform: "scale(" + scale + ")",
      position: "absolute",
      "z-index": Math.floor(100 * scale)
    };
  }

  prev() {
    if(this.selectedIndex == 0) this.selectedIndex = this.config.length-1
    else {
      this.selectedIndex--;
    }
    this.animateCarousel();
    this.animateViews("right");
  }
  next() {
    if(this.config.length-1 == this.selectedIndex) this.selectedIndex = 0
    else {
      this.selectedIndex++;
    }
    this.animateCarousel();
    this.animateViews("left");
  }

  ngAfterViewInit() {
    this.cellWidth=this.itemsView.first?.nativeElement.offsetWidth;
    this.animateCarousel();
    this.animateViews("left");
  }
}


