type astNode = {
    left : number | astNode | null
    op: string | null
    right: number | astNode | null
}


export function is_number_or_operator(value : String) : Boolean {
    const operators = ['.', '+', '-', '/', '%', 'x']

    return operators.includes(value as string) || !isNaN(value as any) 
}


export function calculate_expession(value : String) {
    const tokens = value.match( /(-|\+|x|%|\/)|(\d+\.?(\d+)?)/g )

    let current_token = tokens?.shift()

    const match = () => {
        current_token = tokens?.shift()
    }

    const exp = () => {
        let left = termo()
        return exp2(left)
    }

    const exp2 = (left : astNode) => {
        while (current_token === '+' || current_token === '-' ) {
            let node = {} as astNode

            node.op = current_token
            match()

            node.right = termo()
            node.left = left
            left = node
        }

        return left
    }

    const termo = () => {
        let left = factor()
        return termo2(left as astNode)
    }

    const termo2 = (left : astNode) => {
        while (current_token === 'x' || current_token === '/' || current_token === '%' ) {
            let node = {} as astNode

            node.op = current_token
            match()

            node.right = factor() as astNode
            node.left = left
            left = node
        }

        return left
    }

    const factor = () => {
        if (!isNaN(current_token as any)) {
            let node = { left: Number(current_token), op : 'number' } as astNode
            match()
            return node
        }
    }


    let astTree = exp()
    return String(interprete_ast(astTree))
}


function interprete_ast(ast : astNode) {
    let left, right

    if (ast.left) 
        left = interprete_ast(ast.left)

    if (ast.right)
        right = interprete_ast(ast.right)

    switch (ast.op) {
        case '+':
            return left + right

        case '-':
            return left - right

        case 'x':
            return left * right

        case '/':
            return left / right

        case '%':
            return left % right

        case 'number':
            return ast.left
    }
}
