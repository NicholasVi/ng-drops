import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewChild,
} from '@angular/core';
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';
import JSZip from 'jszip';
import { SaverService } from '../services/saver/saver.service';
import htmlToImage from 'html-to-image';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-constructor',
  templateUrl: './constructor.component.html',
  styleUrls: ['./constructor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConstructorComponent implements OnInit {
  @ViewChild('previewContainer', { static: false })
  public previewContainer;
  public files = new BehaviorSubject<string[]>(null);

  private dataBuffer = {
    imgs: [],
    titles: [],
    texts: [],
  };

  config = {
    size: {
      h: 600,
      w: 1080,
    },
    imgType: 'jpeg',
  };

  descriptions = '';
  titles = '';

  constructor(private saver: SaverService) {}
  ngOnInit() {}

  filterImg(files: File[]): File[] {
    const validators = {
      getType: (file) => !!file['type'],
      isImg: (file) => file['type'].indexOf('image') === 0,
      notSvg: (file) => file['type'].indexOf('svg') < 0,
    };
    return files.filter((f) =>
      Object.keys(validators).every((v) => validators[v](f))
    );
  }

  foo(e: Event) {
    Promise.all(
      this.filterImg(Array.from(e.target['files'])).map(this.fileToBase64)
    ).then((resp) => this.files.next(resp as string[]));
  }

  fileToBase64(file: File) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  }

  public textToArr(text: string): string[] {
    try {
      return text
        .replace(/\n+/gi, `\n`)
        .split(`\n`)
        .filter((i) => !!i);
    } catch {
      return [];
    }
  }

  getRandomItem(arr: string[] = ['']): string {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  getTextCombinations() {
    return {
      text: this.getRandomItem(this.textToArr(this.descriptions)),
      title: this.getRandomItem(this.textToArr(this.titles)),
    };
  }

  saveAll(): void {
    const zip = new JSZip();
    const img = zip.folder('images');

    Promise.all(
      Array.from(this.previewContainer.nativeElement.children).map((block) => {
        return htmlToImage.toJpeg(block as HTMLElement).then((blob) => {
          console.log(blob);
          return img.file(
            `img${Math.random()}.${this.config.imgType}`,
            blob.split('base64,')[1],
            {
              base64: true,
            }
          );
        });
      })
    ).then(() => {
      zip.generateAsync({ type: 'blob' }).then((content) => {
        saveAs(content, 'example.zip');
      });
    });
  }
}
