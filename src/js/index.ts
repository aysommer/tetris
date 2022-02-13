class Tetris {
   private canvas: HTMLCanvasElement;
   private context: CanvasRenderingContext2D;

   private timer: NodeJS.Timer;

   readonly cubeSize: number = 10;

   // TODO: To test that
   private x: number;
   private y: number;
   private dx: number = 2;
   private dy: number = -2;

   constructor() {
      this.canvas = document.getElementById("gameCanvas") as HTMLCanvasElement;
      this.context = this.canvas.getContext("2d");

      this.x = this.canvas.width / 2;
      this.y = this.canvas.height - 30;

      document.addEventListener("keydown", this.keyDownHandler, false);
   }

   private keyDownHandler = (e: KeyboardEvent) => {

   }

   private collisionDetection = () => {
      // TODO: Check that sample.
      // for (var c = 0; c < brickColumnCount; c++) {
      //    for (var r = 0; r < brickRowCount; r++) {
      //       var b = bricks[c][r];
      //       if (b.status == 1) {
      //          if (x > b.x && x < b.x + brickWidth && y > b.y && y < b.y + brickHeight) {
      //             dy = -dy;
      //             b.status = 0;
      //          }
      //       }
      //    }
      // }
   }

   private drawBlock = () => {
      this.context.beginPath();
      this.context.rect(0, 0, 50, 50);
      this.context.fillStyle = "#009500";
      this.context.fill();
      this.context.closePath();
   }

   private clearContext = () => {
      this.context.clearRect(0, this.y, this.canvas.width, this.canvas.height);
   }

   private draw = () => {
      this.clearContext();
      this.drawBlock();
      this.collisionDetection();

      this.y += this.dy;
   }

   public start = () => {
      this.timer = setInterval(this.draw, 10);
   }
}

const tetris = new Tetris();
tetris.start();