import { Component, Input } from "@angular/core";

@Component({
    selector: 'kanban-clase',
    template: `
        <table class="table">
            <thead>
                <tr>
                    <th>
                        {{taskList.Name}}
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr *ngFor="let task of taskList.Items" [hidden]="task.Hidden">
                    <td>{{task.Name}} <input type="checkbox" (click)="doHide(task)"/></td>
                </tr>
            </tbody>
        </table>
    `,
    styles:[
        `
        th{
            color: white;
            background-color: #66d1ce;
        }
        td{
            background-color: #99f0ed;
        }
        input[type="checkbox"]
        {
            margin-left: 50px;
        }

        `
    ]
})

export class KanbanClaseComponent{
    @Input() taskList:any

    doHide(task){
        task.Hidden = true;
    }
}