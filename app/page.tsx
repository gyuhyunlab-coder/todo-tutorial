import { TodoList } from "@/components/todo-list"
import { AuroraText } from "@/components/ui/aurora-text"

export default function Page() {
  const title = (
    <h1 className="text-4xl font-bold tracking-tight">
      ✨ <AuroraText>오늘의 할 일</AuroraText>
    </h1>
  )

  return (
    <div className="flex min-h-svh justify-center p-6">
      <div className="flex w-full max-w-xl min-w-0 flex-col gap-6">
        <div className="flex flex-col gap-1.5">
          {title}
          <p className="font-serif text-sm text-muted-foreground italic">
            작은 할 일들이 모여, 오늘 하루의 모양을 만들어갑니다.
          </p>
        </div>
        <TodoList />
      </div>
    </div>
  )
}
