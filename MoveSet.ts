export type MoveSet = Move[];

type Move = {
    name: string,
    isValidMove: (state: PieceState, destination: Position) => boolean
};

export const pawnMoveSet: MoveSet = [
    { name: 'forwardOne', movePosition: {x: 0, y: 1} },
    { name: 'forwardTwo', movePosition: {x: 0, y: 2} }
];

export const rookMoveSetL MoveSet = [
    {name: 'forward', movePosition: {}}
]