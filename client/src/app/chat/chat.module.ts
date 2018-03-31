import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';
import { ChatComponent } from './chat.component';

import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [
    CommonModule,
    ChatRoutingModule,
    MatCardModule,
  ],
  declarations: [ChatComponent]
})
export class ChatModule { }
