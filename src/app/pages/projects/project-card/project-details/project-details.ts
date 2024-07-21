import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Project } from "../../../../api";
import { MatIcon } from "@angular/material/icon";
import { MatTooltip } from "@angular/material/tooltip";
import { RouterLink } from "@angular/router";

@Component({
    selector: 'project-detail',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        MatButtonModule,
        MatDialogActions,
        MatDialogClose,
        MatDialogTitle,
        MatDialogContent,
        MatIcon,
        MatTooltip,
        RouterLink,
    ],
    templateUrl: './project-details.html',
    styleUrl: './project-details.scss',
})
export class ProjectDetails {
    protected readonly dialogRef = inject(MatDialogRef<ProjectDetails>);
    protected readonly project: Project = inject(MAT_DIALOG_DATA);

    protected isDisable(value: string): boolean {
        if (value == '') return true;
        return false;
    }
}
