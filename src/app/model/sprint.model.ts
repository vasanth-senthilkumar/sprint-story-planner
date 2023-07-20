// Sprint Model
export interface Sprint {
    id: number;
    name: string;
    startDate: Date;
    endDate: Date;
    stories: Story[];
}
//  Story Model 
export interface Story {
    id: number;
    title: string;
    description: string;
    status: string;
    sprintId: number;
}
