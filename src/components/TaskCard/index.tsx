import { Container, Title, TopSection, Content, CardFooter, StyledMenuItem, StyledMenu } from "./styles";
import {
  faListUl,
  faClock,
  faEllipsisV,
  faPen,
  faTrash,
  faRedo,
  faRedoAlt,
  faRotateLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { usePullTaskData } from "../../hooks/taskContext";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import { Item } from "react-bootstrap/lib/Breadcrumb";

interface TaskCardProps {
  description: string;
  createdAt: Date;
  deadline: Date;
  id: string;
  concluded: boolean;
}

function handleDay(dia: string) {
  const numDia = parseInt(dia);
  return numDia >= 10 ? dia : "0" + dia;
}
function handleMonth(mes: number) {
  const mesAtt = (mes + 1).toString();
  return +mesAtt >= 10 ? mesAtt : "0" + mesAtt;
}

function hendleDate(date: Date) {
  const stringData = new Date(date);

  const handledData = `${handleDay(
    stringData.getDate().toString()
  )}/${handleMonth(stringData.getMonth())}/${stringData
    .getFullYear()
    .toString()}`;

  return handledData;
}

export function TaskCard({
  description,
  createdAt,
  deadline,
  id,
  concluded
}: TaskCardProps) {
  const Atual = new Date().getTime();
  const AtualDay = new Date().getDay();
  const TaskDeadLine = new Date(deadline).getDay();
  const TaskDeadLineTime = new Date(deadline).getTime();
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const{ setSelectedTaskItem, setTaskEditModalOpen, setTaskRemoveModalOpen, setTaskConcludeModalOpen, setTaskUnconcludeModalOpen }  = usePullTaskData()
  function handleOpen() {
    setMenuIsOpen(true);
  }
  function handleClose() {
    setMenuIsOpen(false);
  }
  const selectedItem = {id, deadline, description, createdAt, concluded}
  function editTasks(item: TaskCardProps) {
    setTaskEditModalOpen(true)
    item && setSelectedTaskItem(item)
    handleClose()
    console.log(item)
  }
  function removeTasks(item: TaskCardProps) {
    setTaskRemoveModalOpen(true)
    item && setSelectedTaskItem(item)
    handleClose()
    console.log(item)
  }
  function concludeTasks(item: TaskCardProps) {
    setTaskConcludeModalOpen(true)
    item && setSelectedTaskItem(item)
    handleClose()
    console.log(item)
  }

  function unconcludeTasks(item: TaskCardProps) {
    setTaskUnconcludeModalOpen(true)
    item && setSelectedTaskItem(item)
    handleClose()
    console.log(item)
  }


  return (
    <Container>
      <TopSection>
        <Title
          situation={
            concluded ? "var(--success)"  :
            TaskDeadLineTime < Atual
              ? "var(--danger)"
              : TaskDeadLine == AtualDay
              ? "var(--warning)"
              : "var(--positive)"
          }
        >
          { 
            concluded ? "\u2705	Tarefa Concluída 	"  :
            TaskDeadLineTime < Atual
            ? "Em atraso"
            : TaskDeadLine == AtualDay
            ? "Entrega Hoje"
            : "Ta safe"}
        </Title>
      </TopSection>
      <Content
        situation={
          concluded ? "var(--success)"  :
          TaskDeadLineTime < Atual
            ? "var(--danger)"
            : TaskDeadLine == AtualDay
            ? "var(--warning)"
            : "var(--positive)"
        }
      >
        <div>
          <h3>{description ? description : ""}</h3>
          <p> Descrição da Task </p>
        </div>
        <button id={id}>
          <FontAwesomeIcon
            icon={faEllipsisV}
            size="1x"
            color="var(--textTerciary)"
            onClick={handleOpen}
          />
        </button>
        <StyledMenu
          open={menuIsOpen}
          onClose={handleClose}
          anchorEl={document.getElementById(id)}
          MenuListProps={{
            "aria-labelledby": "menu-button",
          }}
          style={{
            position:'fixed',
            overflowY:'auto',
            
          }}
          transitionDuration={300}
          onClick={()=> console.log(id)}
          
        >
          {concluded === true ?(
           <StyledMenuItem buttonColor="var(--positive)"  onClick={()=> unconcludeTasks(selectedItem)}>
            <button>
              <FontAwesomeIcon icon={faRotateLeft} />
            </button>
          </StyledMenuItem>) :  (
            <StyledMenuItem buttonColor="var(--success)"  onClick={()=> concludeTasks(selectedItem)}>
            <button>
              <FontAwesomeIcon icon={faCheckCircle} />
            </button>
          </StyledMenuItem>)
           }
         
         
          <StyledMenuItem buttonColor="var(--warning)"  onClick={()=> editTasks(selectedItem)}>
            <button >
              <FontAwesomeIcon icon={faPen} />
            </button>
          </StyledMenuItem>
          <StyledMenuItem buttonColor="var(--danger)"  onClick={()=> removeTasks(selectedItem)}>
            <button>
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </StyledMenuItem>
        </StyledMenu>
      </Content>
      <CardFooter>
        <div>
          <FontAwesomeIcon
            icon={faListUl}
            size="1x"
            color="var(--textTerciary)"
          />
          <span>Tarefas</span>
        </div>
        <div>
          <FontAwesomeIcon
            icon={faClock}
            size="1x"
            color="var(--textTerciary)"
          />
          <span>{createdAt ? hendleDate(deadline) : "i"}</span>
        </div>
      </CardFooter>
    </Container>
  );
}
