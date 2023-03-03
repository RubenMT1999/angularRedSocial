import { PostService } from './../../../profile/services/post.service';
import { AuthService } from './../../../auth/services/auth.service';
import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CommentsService} from "../../../profile/services/comments.service";
import {NuevaInterfaz} from "../../../profile/interfaces/interfaceComments";

@Component({
  selector: 'app-posts-section',
  templateUrl: './posts-section.component.html',
  styleUrls: ['./posts-section.component.css']
})
export class PostsSectionComponent implements OnInit{
  public comentario: boolean = false;
  public numero: number = 0;
  public listacomentario = [];
  public like:boolean = false;

  miFormulario: FormGroup = this.fb.group({
    message: ['', [Validators.required, Validators.maxLength(50)]],
    image: ['prueba', [Validators.required, Validators.maxLength(50)]],
    publication_date: new Date()
  });

  miComentario: FormGroup = this.fb.group({
    message: ['', [Validators.required, Validators.maxLength(50)]],
    date_comments: new Date()
  });

  public someValue:string= '';
  public someComentario:string= '';

  coments: NuevaInterfaz[] = [];




  ngOnInit(): void {
    this.listarPost();

    this.obtenerCommentsPosts();


  }
  get obtener(){
    return this.commentsService.arrayprueba;
  }

  get obtenerCommentsPost(){
    return this.commentsService.commentsPosts;
  }

  get obtenerPostFollowers(){
    return this.postService.usuarioPostsFollower;
  }

  get obtenerCommentsPostS(){
    return this.commentsService.posts;
  }

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private postService: PostService,
              private commentsService: CommentsService) {
  }


  listarPost(){
    const usermail = this.authService.usuario.username!;

    this.postService.obtenerPostsFollowers(usermail)
      .subscribe(resp =>{
      })
  }

  // listaComments(variable: number){
  //     this.commentsService.obtenerCommentsPost(variable)
  //       .subscribe(resp=>{
  //       })
  //   }

  postLike(id: number) {
    this.postService.crearLike(id)
      .subscribe(resp => {
        if(resp){
          this.ngOnInit();
        }else{
        }
      })
  }



  postDisLike(id: number){
    const usermail = this.authService.usuario.username!;
    this.postService.crearDisLike(id)
      .subscribe(resp => {
        if(resp){
          this.ngOnInit();
        }else {
        }
      })
  }

  comentariosDisponible(id: number){
    this.commentsService.obtenerCommentsPost(id)
      .subscribe(resp=>{
      })
    this.someComentario = '';
    this.numero = id;
    this.comentario = !this.comentario;
  }



  userComments(id: number){
    const {message, date_comments} = this.miComentario.value;
    const username = this.authService.usuario.username!;
    console.log(this.miComentario.value);
    this.commentsService.crearComments(message, id, username, date_comments)
      .subscribe(resp => {
        if(resp){
          console.log(this.miComentario.value);
          this.someComentario= '';
          this.ngOnInit();
        }else{

        }

      })
  }

  userPost(){
    const { message, image, publication_date} = this.miFormulario.value;
    const usermail = this.authService.usuario.username!;

    console.log(this.miFormulario.value);

    this.postService.crearPost(usermail, message, image, publication_date)
      .subscribe(resp => {
        if(resp){


          //limpiamos el valor del input.
          this.someValue= '';
          //ejecutamos onInit para refrescar la página y aparezca el mensaje.
          this.ngOnInit();
        }else{

        }

      })
  }

  obtenerCommentsPosts(){

    this.commentsService.obtenerCommentsPost().subscribe(resp => {




    });

  }




}
