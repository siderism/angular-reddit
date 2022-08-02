export class Article {
    public votes: number;
    constructor(
        public title: string,
        public link: string, 
        votes?: number 
    ) {
        this.votes = votes || 0;
    }

    voteUp(): void {
        this.votes += 1
    }

    voteDown(): void {
        this.votes -= 1
    }

    domain(): string {
        try {
            const domainAndPath = this.link.split('//')[1];
            return domainAndPath.split('/')[0];
        } catch (err) {
            return '';
        }
    }
}